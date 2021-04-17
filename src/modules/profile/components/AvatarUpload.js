import React, { Component } from "react";
import Dropzone from "./upload/dropzone/Dropzone";
import "./avatarUpload.css";
import Progress from "./upload/progress/Progress";
import 'babel-polyfill';
import Modal from '@material-ui/core/Modal';
class AvatarUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      uploadHandleFlag: false,
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    try {
      const uploadReselts = await this.sendRequest(1, this.state.files[0]);
      if (this.props.uploadResponseFunc) {
        this.props.uploadResponseFunc(uploadReselts);
      }
      this.setState({ files: [], successfullUploaded: false, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  sendRequest(user_id, file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
      });


      req.addEventListener("loadend", event => {
        if (req.status == 200) {
          resolve(JSON.parse(req.response));
        } else {
          const error = {
            success: false,
            messages: [req.statusText]
          }
          resolve(error);
        }
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("avatar", file, file.name);
      formData.append("user_id", user_id);

      req.open("POST", "http://localhost:8000/api/v1/uploads/userAvatar");
      req.send(formData);
    });
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
        </div>
      );
    }
  }

  removeCurrentFile(file) {
    this.setState((state) => {
      const { files } = this.state;
      const index = files.indexOf(file);
      if (index !== -1) {
        files.splice(index, 1);
      }
      return {
        files
      }
    });
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      );
    }
  }

  render() {
    return (
      <div className="avatarModal">
        <div className="content">
          <button onClick={e => this.props.openAvatarDialog(e)}>X</button>
          <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
            type="avatar"
          />
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">
                    {file.name}
                    { !this.state.uploading
                        &&
                        <button
                          onClick={() => this.removeCurrentFile(file)}
                        >
                          X
                        </button>
                    }
                  </span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
          <button onClick={this.uploadFiles}>Upload</button>
        </div>
      </div>
    );
  }
}

export default AvatarUpload;

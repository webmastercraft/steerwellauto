<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class UploadController extends Controller
{
    public function uploadUserFiles(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric|exists:steer_well_users,id',
            'file' => 'required|file',
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        try {
            $input = $validator->validate();
            $file = $request->file('file');
            $type = $file->getClientOriginalExtension();
            $orignal_name = $file->getClientOriginalName();
            $path = env("APP_UPLOAD_USER_ADDITION_URL") . "/" . $input['user_id'];
            $uploadUrl = public_path($path);
            $name = str_random(20).".".$type;
            $path = $path.$name;
            $file->move($uploadUrl, $name);

            $data["success"] = true;
            $data["url"] = $path;
            $data["name"] = $orignal_name;
            $success_array = array();
            array_push($success_array, "The user addition file uploaded successfully.");
            $data["messages"] = $success_array;

            return $data;
        } catch (\Exception $e) {
            $error_array = array('file' => ["The user addition file uploading failed."]);
            return $this->handleErrorResponse($error_array);
        }
    }
    
    public function uploadAvatarImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric|exists:steer_well_users,id',
            'avatar' => 'required|image',
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        try {
            $input = $validator->validate();
            $file = $request->file('avatar');
            $type = $file->getClientOriginalExtension();
            $orignal_name = $file->getClientOriginalName();
            $path = env("APP_UPLOAD_USER_IMAGES") . "/" . $input['user_id'] . "/";
            $uploadUrl = public_path($path);
            $name = str_random(20).".".$type;
            $path = $path.$name;
            $file->move($uploadUrl, $name);

            $data["success"] = true;
            $data["url"] = $path;
            $data["name"] = $orignal_name;
            $success_array = array();
            array_push($success_array, "The user addition file uploaded successfully.");
            $data["messages"] = $success_array;

            return $data;
        } catch (\Exception $e) {
            $error_array = array('file' => ["The user addition file uploading failed."]);
            return $this->handleErrorResponse($error_array);
        }
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 422);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Validator;
use Illuminate\Validation\Rule;
 
class UserController extends Controller
{
    public function getAllUsers(Request $request)
    {
        $data_array = User::get();
        return UserController::decodeJsonDataFromArray($data_array);
    }

    static public function getUsersById($user_id)
    {
        $data = User::where('id', $user_id)->get()->first();
        return UserController::decodeJsonData($data);
    }

    public function insert(Request $request) {

        $validator = Validator::make($request->all(), [
            'id' => 'nullable|unique:steer_well_users,id',
            'name' => 'required|min:3',
            'email' => 'required|email|unique:steer_well_users,email',
            'passport' => 'nullable|unique:steer_well_users',
            'addition_upload_paths' => 'nullable',
            'phone' => 'nullable',
            'country' => 'nullable',
            'port' => 'nullable',
            'address' => 'nullable',
            'avatar_path' => 'nullable',
            'language' => 'nullable',
            'currency' => 'nullable',
            'login_type' => 'nullable|numeric',
            'user_type' => 'nullable|numeric',
            'remember_token' => 'nullable',
            'created_at' => 'nullable',
            'updated_at' => 'nullable'
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        $input = $validator->validate();

        try {
            $user_id = User::insertGetId($input);
            $user_data = UserController::decodeJsonData(User::where('id', $user_id)->get()->first());
            return response()->json([
                "success" => true,
                "message" => "The user added successfully.",
                "data" => $user_data
            ], 201);
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            $error_array = array('id' => ["The user adding was failed."]);
            return $this->handleErrorResponse($error_array);
        }
    }


    public function update(Request $request) {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:steer_well_users,id',
            'name' => 'required|min:3',
            'email' => [
                'required',
                'email',
                Rule::unique('steer_well_users', "email")->ignore($request->id),
            ],
            'passport' => 'nullable',
            'addition_upload_paths' => 'nullable',
            'phone' => 'nullable',
            'country' => 'nullable',
            'port' => 'nullable',
            'address' => 'nullable',
            'avatar_path' => 'nullable',
            'language' => 'nullable',
            'currency' => 'nullable',
            'login_type' => 'nullable|numeric',
            'user_type' => 'nullable|numeric',
            'remember_token' => 'nullable',
            'created_at' => 'nullable',
            'updated_at' => 'nullable'
        ]);

        if ($validator->fails()) {
            return $this->handleErrorResponse($validator->errors());
        }

        $input = $validator->validate();

        try {
            $user_id = $input["id"];
            $user = User::where('id', $user_id);
            $user_data = UserController::decodeJsonData($user->get()->first());
            foreach(array_keys($input) AS $key) {
                $user_data[$key] = $input[$key];
            }
            $user->update($user_data->toArray());
            $user_data = UserController::decodeJsonData($user_data);
            return response()->json([
                "success" => true,
                "data" => $user_data,
                "message" => "The user updated successfully."
            ], 201);
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getCode(), $e->getTrace());
            $error_array = array('id' => ["The user updating was failed."]);
            return $this->handleErrorResponse($error_array);
        }
    }

    static public function decodeJsonData($data) {
        $data["addition_upload_paths"] = json_decode($data["addition_upload_paths"]);
        return $data;
    }

    static public function decodeJsonDataFromArray($array_data) {
        foreach($array_data AS $data) {
            $data = UserController::decodeJsonData($data);
        }
        return $array_data;
    }

    // This fuction is working without validation, we should work validate before calling this function
    public function updateByArray($input) {
        $user_id = $input["id"];
        $user = User::where('id', $user_id);
        $user_data = $user->get()->first();
        foreach(array_keys($input) AS $key) {
            $user_data[$key] = $input[$key];
        }
        $user->update($user_data->toArray());
        return response()->json($user_data, 201);
    }

    public function handleErrorResponse($messages) {
        $error_response = array();
        $error_response["success"] = false;
        $error_response["messages"] = $messages;
        return response()->json($error_response, 422);
    }
}

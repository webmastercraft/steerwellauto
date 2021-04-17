<?php

namespace App\Http\Controllers\Api;

use App\Booking;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\DB;
use Validator;
use Illuminate\Validation\Rule;

class BookingController extends Controller
{
    public function insert(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'user_id' => 'required|exists:steer_well_users,id',
        'vehicle_id' => 'required|exists:steer_well_vehicles,id',
        'vehicle_price' => 'required|numeric',
        'booking_price' => 'required|numeric',
        'delivery_price' => 'required|numeric',
        'total_price' => 'required|numeric',
        'country' => 'required',
        'port' => 'required',
        'address' => 'required',
        'doc_path' => 'nullable',
        'user_name' => 'required',
        'user_passport' => 'required',
        'user_email' => [
          'required',
          'email',
          Rule::unique('steer_well_users', "email")->ignore($request->user_id),
        ],
        'user_phone' => 'required',
      ]);

      if ($validator->fails()) {
          return $this->handleErrorResponse($validator->errors());
      }

      $input = $validator->validate();

      try {

        $userArray = array(
          'id' => $input["user_id"],
          'name' => $input["user_name"],
          'passport' => $input["user_passport"],
          'email' => $input["user_email"],
          'phone' => $input["user_phone"]
        );

        // update user info
        $userController = new UserController();
        $userController->updateByArray($userArray);

        $bookingArray = array(
          'user_id' => $input["user_id"],
          'vehicle_id' => $input["vehicle_id"],
          'vehicle_price' => $input["vehicle_price"],
          'booking_price' => $input["booking_price"],
          'delivery_price' => $input["delivery_price"],
          'total_price' => $input["total_price"],
          'country' => $input["country"],
          'port' => $input["port"],
          'address' => $input["address"],
          'doc_path' => $input["doc_path"],
        );

        $booking_data = BookingController::getBookingInfo($bookingArray["user_id"], $bookingArray["vehicle_id"]);

        if ($booking_data) {
          $id = $booking_data->id;
          $booking_data = (array)$booking_data;
          foreach(array_keys($bookingArray) AS $key) {
            $booking_data[$key] = $bookingArray[$key];
          }
          BookingController::getBookingInfoById($id)->update($booking_data);
        } else {
          $booking_id = Booking::insertGetId($bookingArray);
          $booking_data = BookingController::getBookingInfoById($booking_id)->get()->first();
        }

        return response()->json([
          "success" => true,
          "data" => $booking_data,
          "message" => "The user updated successfully."
        ], 201);

      } catch (\Exception $e) {
          dd($e->getMessage(), $e->getCode(), $e->getTrace());
          $error_array = array('id' => ["The booking data updating was failed."]);
          return $this->handleErrorResponse($error_array);
      }
    }

    public function getBookingInfo($user_id, $vehicle_id)
    {
      return DB::table('steer_well_bookings')
              ->where('user_id', $user_id)
              ->where('vehicle_id', $vehicle_id)
              ->get()
              ->first();
    }

    public function getBookingInfoById($id)
    {
      return DB::table('steer_well_bookings')
              ->where('id', $id);
    }

    public function handleErrorResponse($messages) {
      $error_response = array();
      $error_response["success"] = false;
      $error_response["messages"] = $messages;
      return response()->json($error_response, 422);
    }
}

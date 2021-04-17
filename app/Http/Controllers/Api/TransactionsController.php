<?php

namespace App\Http\Controllers\Api;

use App\Transactions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class TransactionsController extends Controller
{
    public function getAll()
    {
        return Transactions::get();
    }

    static public function getTransactionsByIds($user_id) {

        $data = array();

    	$transactions = Transactions::where('user_id', $user_id)
            ->leftJoin('steer_well_vehicles', 'steer_well_transactions.vehicle_id', '=', 'steer_well_vehicles.id')
            ->leftJoin('steer_well_brands', 'steer_well_vehicles.brand_id', '=', 'steer_well_brands.id')
            ->leftJoin('steer_well_models', 'steer_well_vehicles.model_id', '=', 'steer_well_models.id')
            ->leftJoin('steer_well_categories', 'steer_well_vehicles.category_id', '=', 'steer_well_categories.id')
            ->leftJoin('steer_well_transaction_status', 'steer_well_transaction_status.id', '=', 'steer_well_transactions.status')
            ->leftJoin('steer_well_transaction_deliver_status', 'steer_well_transaction_deliver_status.id', '=', 'steer_well_transactions.delivery_status')
            ->select('steer_well_transactions.id', 'steer_well_transactions.user_id' , 'steer_well_transactions.booking_id', 'steer_well_transactions.vehicle_id', 'steer_well_transactions.status', 'steer_well_transactions.delivery_status', 'steer_well_transactions.residual_cost' , 'steer_well_transactions.booking_cost', 'steer_well_transactions.remain_to_pay', 'steer_well_transactions.reserved_untill', 'steer_well_transactions.sent_at', 'steer_well_transactions.residual_paid_at', 'steer_well_transactions.booking_paid_at', 'steer_well_transactions.cancelled_at', 'steer_well_transactions.residual_paid', 'steer_well_transactions.booking_paid', 'steer_well_transactions.doc_path', 'steer_well_vehicles.image_paths', 'steer_well_vehicles.brand_id', 'steer_well_vehicles.model_id', 'steer_well_vehicles.category_id', 'steer_well_brands.title as brand_title', 'steer_well_models.title as model_title', 'steer_well_categories.title as category_title', 'steer_well_transaction_status.title as transaction_status_title', 'steer_well_transaction_deliver_status.title as transaction_deliver_status_title')
            ->get();

        foreach ($transactions as $item) {
            $item->image_paths = json_decode($item->image_paths);
        }

        $statusItems = DB::table('steer_well_transaction_status')->get();

        foreach ($statusItems as $status_item) {
            $status_item_id = $status_item->id;
            $status_item_title = $status_item->title;
            $filteredTransItems = $transactions->filter(function($q) use($status_item_id){
                return $q->status == $status_item_id;
            });
            $arrayData = array();
            foreach ($filteredTransItems as $filteredTransItem) {
               array_push($arrayData, $filteredTransItem);
            }
            $data[$status_item_title] = $arrayData;
        }

        return $data;
    }

    public function getTransactionInfo(Request $request)
    {

    }
}

<?php

namespace App\Http\Controllers\Api;

use App\TransactionHistory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class TransactionHistoryController extends Controller
{
    public function insert(Request $request) {
        $input = $this->validate($request, [
            'transaction_id' => 'required|numeric|exists:steer_well_transactions,id',
            'amount' => 'required|numeric',
            'type' => 'required|numeric'
        ]);

        if($input["type"] == 0) { //residual

        } else { // book

        }

        $transaction_history = TransactionHistory::insertGetId($input);
        $transaction_history_data = TransactionHistory::where('id', $transaction_history)->get()->first();
        return response()->json($transaction_history_data, 201);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SubscribeController extends Controller
{
    public function showPlans(Request $request)
    {
        $plans = Plan::all();

        if ($request->wantsJson()) {
            return response()->json([
                'plans' => $plans,
            ]);
        }

        return Inertia::render('Plan/Index', [
            'plans' => $plans,
        ]);
    }

    public function checkoutSubscription(Plan $plan)
    {
        $user = Auth::user();

        return Inertia::render('Plan/Checkout', [
            'plan' => $plan,
            'user' => $user,
        ]);
    }

    public function processCheckout(Request $request)
    {
        $user = Auth::user();
        $plan = Plan::findOrFail($request->plan_id);
        $memberships = $user->memberships()->create([
            'plan_id' => $request->plan_id,
            'active' => true,
            'start_date' => now(),
            'end_date' => now()->addDays($plan->duration),
        ]);

        return redirect()->route('welcome');
    }

    public function successSubscription()
    {
        return 'success';
    }
}

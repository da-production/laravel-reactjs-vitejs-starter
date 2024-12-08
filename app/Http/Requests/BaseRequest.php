<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class BaseRequest extends FormRequest
{

    public function failedValidation(Validator $validator)
    {
        $errors = [];
        foreach($validator->errors()->messages() as $key => $err) {
            $errors[$key]=$err[0];
        }
        throw new HttpResponseException(response()->json($errors,422));
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */

class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        return [
            'author_id' => $faker->randomDigit(),
            'message' => $faker->text(),
            'created_at' => $faker->datetime(),
            'updated_at' => $faker->datetime()
        ];
    }
}

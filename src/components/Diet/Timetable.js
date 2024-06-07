import React from 'react';
import bgImage from './images/bg.png'; // Ensure you have a background image at this path

export default function Timetable() {
  return (
    <div
      className="flex flex-col items-center p-6 min-h-screen mt-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-lg shadow-lg">
        Fitness Food Timetable
      </h1>
      <div className="overflow-x-auto w-full bg-white bg-opacity-80 rounded-lg shadow-xl">
        <table className="min-w-full border border-gray-300 rounded-lg divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-lg font-bold text-left text-white bg-gradient-to-r from-green-400 to-blue-500 border-b">Day</th>
              <th className="px-4 py-3 text-lg font-bold text-left text-white bg-gradient-to-r from-green-400 to-blue-500 border-b">Meal</th>
              <th className="px-4 py-3 text-lg font-bold text-left text-white bg-gradient-to-r from-green-400 to-blue-500 border-b">Fitness Diet</th>
              <th className="px-4 py-3 text-lg font-bold text-left text-white bg-gradient-to-r from-green-400 to-blue-500 border-b">Keto Diet</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {[
              {
                day: 'Monday',
                meals: [
                  ['Breakfast', 'Oatmeal with fruits', 'Scrambled eggs with avocado'],
                  ['Lunch', 'Grilled chicken salad', 'Grilled chicken with spinach salad'],
                  ['Dinner', 'Baked salmon with vegetables', 'Baked salmon with asparagus'],
                ],
              },
              {
                day: 'Tuesday',
                meals: [
                  ['Breakfast', 'Smoothie with spinach and banana', 'Keto smoothie with avocado and spinach'],
                  ['Lunch', 'Quinoa bowl with chickpeas', 'Cauliflower rice with beef'],
                  ['Dinner', 'Turkey stir-fry', 'Turkey stir-fry with zucchini noodles'],
                ],
              },
              {
                day: 'Wednesday',
                meals: [
                  ['Breakfast', 'Greek yogurt with honey and nuts', 'Greek yogurt with chia seeds and berries'],
                  ['Lunch', 'Chicken wrap with veggies', 'Lettuce wrap with chicken and avocado'],
                  ['Dinner', 'Beef stew with potatoes', 'Beef stew with cauliflower rice'],
                ],
              },
              {
                day: 'Thursday',
                meals: [
                  ['Breakfast', 'Whole grain toast with avocado', 'Avocado with bacon strips'],
                  ['Lunch', 'Tuna salad sandwich', 'Tuna salad with olive oil'],
                  ['Dinner', 'Chicken curry with rice', 'Chicken curry with cauliflower rice'],
                ],
              },
              {
                day: 'Friday',
                meals: [
                  ['Breakfast', 'Fruit salad with nuts', 'Keto fruit salad with nuts'],
                  ['Lunch', 'Vegetable soup with bread', 'Vegetable soup with almond flour bread'],
                  ['Dinner', 'Grilled shrimp with quinoa', 'Grilled shrimp with zucchini noodles'],
                ],
              },
              {
                day: 'Saturday',
                meals: [
                  ['Breakfast', 'Smoothie bowl with granola', 'Keto smoothie bowl with flaxseeds'],
                  ['Lunch', 'Chicken and veggie stir-fry', 'Chicken and veggie stir-fry with coconut oil'],
                  ['Dinner', 'Pasta with tomato sauce', 'Zucchini pasta with marinara sauce'],
                ],
              },
              {
                day: 'Sunday',
                meals: [
                  ['Breakfast', 'Pancakes with maple syrup', 'Almond flour pancakes with sugar-free syrup'],
                  ['Lunch', 'Salmon avocado salad', 'Salmon avocado salad with olive oil'],
                  ['Dinner', 'Stuffed bell peppers', 'Stuffed bell peppers with ground beef and cheese'],
                ],
              },
            ].map((dayData, index) => (
              <React.Fragment key={index}>
                {dayData.meals.map((meal, mealIndex) => (
                  <tr
                    key={mealIndex}
                    className={`${
                      mealIndex % 2 === 0 ? 'bg-gradient-to-r from-pink-200 to-purple-200' : 'bg-gradient-to-r from-purple-200 to-pink-200'
                    } hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300 transition duration-300 ease-in-out transform hover:scale-105`}
                  >
                    {mealIndex === 0 && (
                      <td rowSpan={3} className="px-4 py-3 border-b-2 font-bold text-purple-800 border-r-2 border-gray-300">
                        {dayData.day}
                      </td>
                    )}
                    <td className="px-4 py-3 border-b-2 border-r-2 border-gray-300">{meal[0]}</td>
                    <td className="px-4 py-3 border-b-2 border-r-2 border-gray-300">{meal[1]}</td>
                    <td className="px-4 py-3 border-b-2 border-gray-300">{meal[2]}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

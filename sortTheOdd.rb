# You have an array of numbers.
# Your task is to sort ascending odd numbers but even numbers must be on their places.

# Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.


def sort_array(source_array)
  odd_array = source_array.select{|number| number.odd?}.sort  
  source_array.map{ |number| number.even? ? number : odd_array.shift }

end

puts sort_array([5, 3, 2, 8, 1, 4, 11])

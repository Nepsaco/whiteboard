# Create a function (or write a script in Shell) that takes an integer as an 
# argument and returns "Even" for even numbers or "Odd" for odd numbers.


def even_or_odd number
  if number % 2 == 0
    'Even'
  else
    'Odd'
  end
end

refactored

def even_or_odd number
  (number % 2 == 0) ? 'Even': 'Odd'
end

# Implement a function that adds two numbers together and returns their sum in binary. 
# The conversion can be done before, or after the addition.

# The binary number returned should be a string.
#
#
def add_binary(a,b)
  total = a+b
  total.to_s(2)
end

def add_binary(a, b)
  total = a + b
  binaryArray = [total]

  while total > 0 do
    binaryArray << total /= 2
  end

  binaryArray.map do |number| 
    if number % 2 == 0
      number = 0
    else
      number = 1
    end
  end
end

puts add_binary(2, 2)


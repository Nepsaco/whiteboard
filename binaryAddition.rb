# Implement a function that adds two numbers together and returns their sum in binary. 
# The conversion can be done before, or after the addition.

# The binary number returned should be a string.
#
#
def add_binary(a,b)
  total = a+b
  total.to_s(2)
end

def add_real_binary(a, b)
  total = a + b
  binaryArray = []

  while total > 0 do
    remainder = total % 2
    binaryArray << remainder
    total /= 2
  end

  binaryArray
end

puts add_real_binary(2, 2)


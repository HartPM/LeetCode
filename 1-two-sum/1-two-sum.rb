# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    check_hash = {}
    nums.each_with_index do |value, i|
        diff = target - value
        if check_hash[diff]
            return [check_hash[diff], i]
        else
            check_hash[value] = i
        end
    end 
end
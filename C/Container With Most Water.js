var maxArea = function(height) {
    let max_area = 0;
    let i_pointer = 0;
    let j_pointer = height.length -1;

    while(i_pointer < j_pointer){
        if(height[i_pointer] < height[j_pointer]){
            max_area = Math.max(max_area, (height[i_pointer]) * (j_pointer - i_pointer))
            i_pointer++; 
        } else {
            max_area = Math.max(max_area, (height[j_pointer]) * (j_pointer - i_pointer))
            j_pointer--
        }
    }

    return max_area;
};
-- Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

-- Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

-- # write your SQL statement here: you are given a table 'paperwork' with columns 'id', 'n' and 'm', return a table with columns 'n', 'm' and your result in a column named 'res'.



select n, m,
    case 
        when n < 0 or m < 0 then 0
        else n*m
    end as res
from paperwork;
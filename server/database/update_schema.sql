-- Update locations table to use DOUBLE for coordinates to prevent trailing zero padding
-- (UI validation ensures data does not exceed 6 decimal places)
ALTER TABLE locations 
MODIFY COLUMN latitude DOUBLE,
MODIFY COLUMN longitude DOUBLE;

let diemVatLy = parseFloat(prompt('Điểm môn Vật Lý'));
let diemHoaHoc = parseFloat(prompt('Điểm môn Hóa Học:'));
let diemSinhHoc = parseFloat(prompt('Điểm môn Sinh Học:'));
let sum = diemVatLy + diemHoaHoc + diemSinhHoc;
let average = sum / 3;
alert('Điểm trung bình 3 môn là: ' + average);
alert('Điểm tổng 3 môn là: ' + sum);
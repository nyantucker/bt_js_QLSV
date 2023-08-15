// Tạo lớp SinhVien
function SinhVien(_ma,_ten,_mail,_matKhau,_ngaySinh,_khoaHoc,_toan,_ly,_hoa,_dtb) {
    this.ma= _ma;
    this.ten= _ten;
    this.mail= _mail;
    this.matKhau= _matKhau;
    this.ngaySinh = _ngaySinh
    this.khoaHoc = _khoaHoc
    this.toan= _toan;
    this.ly= _ly;
    this.hoa= _hoa;
    this.tinhDTB = function() {
        var dtb = (this.toan + this.ly + this.hoa)/3;
        return dtb.toFixed(2);
    }
}

// Lấy thông tin từ form
function getDataForm () {
    var _ma = document.getElementById("txtMaSV").value;
    var _ten = document.getElementById("txtTenSV").value;
    var _mail = document.getElementById("txtEmail").value;
    var _matKhau = document.getElementById("txtPass").value;
    var _ngaySinh = document.getElementById("txtNgaySinh").value;
    var _khoaHoc = document.getElementById("khSV").value;
    var _toan = document.getElementById("txtDiemToan").value*1;
    var _ly = document.getElementById("txtDiemLy").value*1;
    var _hoa = document.getElementById("txtDiemHoa").value*1;
    var sv = new SinhVien(_ma,_ten,_mail,_matKhau,_ngaySinh,_khoaHoc,_toan,_ly,_hoa);
    return sv;
}

// Show thông tin
function renderDssv (dssv) {
    var contentHTML =``;
    for (var i = 0 ; i < dssv.length ; i++) {
        var sv = dssv[i]
        var contentTr = 
        `<tr>
            <td>${sv.ma}</td>
            <td>${sv.ten}</td>
            <td>${sv.mail}</td>
            <td>${sv.ngaySinh}</td>
            <td>${sv.khoaHoc}</td>
            <td>${sv.tinhDTB()}</td>
        <td class="d-flex justify-content-around"><button onclick="suaSv('${sv.ma}')" class="btn btn-warning">Sửa</button><button class="btn btn-danger" onclick="xoaSv('${sv.ma}')" >Xóa</button></td>
        </tr>`;
        contentHTML = contentHTML + contentTr;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML
}

function timViTri (id,dssv) {
    for ( var i = 0 ; i< dssv.length ; i++) {
        if ( dssv[i].ma == id) {
            return i
        }
    }
}

// Show thông tin lên form
function showDataForm (sv) {
    document.getElementById("txtMaSV").value= sv.ma;
    document.getElementById("txtTenSV").value= sv.ten;
    document.getElementById("txtEmail").value= sv.mail;
    document.getElementById("txtPass").value= sv.matKhau;
    document.getElementById("txtNgaySinh").value= sv.ngaySinh;
    document.getElementById("khSV").value= sv.khoaHoc;
    document.getElementById("txtDiemToan").value= sv.toan;
    document.getElementById("txtDiemLy").value= sv.ly;
    document.getElementById("txtDiemHoa").value= sv.hoa;
}
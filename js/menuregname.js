$(function () {
  var html = "";
  var province_idx;
  $("#input_city").append(html);
  $("#input_type").append(html);

  $.each(cityMessage, function (idx, item) {
    if (item.regname !== null) {
      html += `<option value='${item.regname}' exid='${item.parid}'>${item.regname}</option>`
    }
  });
  $("#input_province").append(html);
  $("#input_province").change(function (e) {
    var province = $(this).val();
    var cityList = [];
    if (province == "") return;
    $("#input_city option").remove();
    var html = "<option value=''>纽约</option>";

    //					获取已选择的省份的数组下标
    $.each(cityMessage, function (idx, item) {
      if (province == item.regname) {
        console.log(idx)
        province_idx = idx
      }
    })

    //					获取已选择的省份的城市列表
    $.each(cityMessage, function (idx, item) {
      cityList = (cityMessage[province_idx].city).map(function (item, index) {
        return item;
      }, this)
    })

    //					添加城市信息给标签
    if (cityList instanceof Array && cityList.length > 0) {
      $.each(cityList, function (idx, item) {
        html += "<option value='" + item.name + "' exid='" + item.parid + "'>" + item.name + "</option>";

      });
    } else {
      html += "<option value='" + cityMessage[province_idx].regname + "' exid='" + cityMessage[province_idx].parid + "'>" + cityMessage[province_idx].regname + "</option>";
    }
    $("#input_city").append(html);
  });


  $("#input_city").change(function (e) {
    var type = $(this).val();
    var typeList = [];
    // if (province == "") return;
    $("#input_type option").remove();
    var html = "<option value=''>法律移民</option>";

    if (type !== null) {
      typeList = (cityMessage[province_idx].immigration).map(function (item, index) {
        return item;
      })
    }
    if (typeList instanceof Array && typeList.length > 0) {
      $.each(typeList, function (idx, item) {
        html += "<option value='" + item.type + "' >" + item.type + "</option>";

      });
    } else {
      html += "<option value='" + cityMessage[province_idx].regname + "'>" + cityMessage[province_idx].regname + "</option>";
    }

    $("#input_type").append(html);
  });
});

//图片自适应
function setimg(obj, maxw, maxh)
{
	var imgw = jQuery(obj).width();
	var imgh = jQuery(obj).height();
	
	var imgbfb = (imgh/imgw)*100;
	if(imgbfb > maxh){
		ww = (maxh/imgh)*imgw;
		imgw = ww+'%';
		imgh = 100+'%';
		tops = 0;
		left = (100-ww)/2+'%';
	}else{
		hh = (((imgh/imgw)*maxw)/maxh)*maxw;
		imgw = 100+'%';
		imgh = hh+'%';
		tops = (100-hh)/2+'%';
		left = 0;
	}
	jQuery(obj).css({"width":imgw,"height":imgh,"top":tops,"left":left});
}
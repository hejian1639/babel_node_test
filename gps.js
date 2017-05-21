// var fs = require('fs')

// fs.readFile('航线数据.txt', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

var readline = require('readline');
var fs = require('fs');
var os = require('os');

var fReadName = '航线数据.txt';
var fWriteName = 'test.gps';
var fRead = fs.createReadStream(fReadName);
var fWrite = fs.createWriteStream(fWriteName);


var objReadline = readline.createInterface({
    input: fRead,
    // 这是另一种复制方式，这样on('line')里就不必再调用fWrite.write(line)，当只是纯粹复制文件时推荐使用  
    // 但文件末尾会多算一次index计数   sodino.com  
    //  output: fWrite,   
    //  terminal: true  
});

var buffer;
var index = 1;
fWrite.write('GNSS_LATITUDE,GNSS_LONGITUDE,ALTITUDE,MACH,TRUE_HEADING,GROUNDSPEED\n');

objReadline.on('line', (line) => {
    if (line == '{') {
        buffer = line;
    } else if (line == '}') {
        buffer = buffer.substr(0, buffer.length - 1);
        buffer += line;
        // console.log(buffer);
        obj = JSON.parse(buffer);
        fWrite.write(obj.data.latitude + ',');
        fWrite.write(obj.data.longitude + ',');
        fWrite.write(obj.data.altitude + ',');
        fWrite.write('0,');
        fWrite.write(obj.data.mag_heading + ',');
        fWrite.write(obj.data.ground_speed + '\n');
        // console.log(obj);
        // fWrite.write(buffer); // 下一行  
        // fWrite.write('\n'); // 下一行  
    } else if (line.search(/NumberLong/) == -1) {
        buffer += line;

    }
    // console.log(index, line);
    index++;
});

objReadline.on('close', () => {
    console.log('readline close...');
});
function get_fraction(number){
    switch (number) {
        case 1:
            fraction = "<sup>1</sup>&frasl;<sub>16</sub>";
            break;
        case 2:
            fraction = "<sup>2</sup>&frasl;<sub>16</sub>";
            break;
        case 3:
            fraction = "<sup>3</sup>&frasl;<sub>16</sub>";
            break;
        case 4:
            fraction = "<sup>4</sup>&frasl;<sub>16</sub>";
            break;
        case 5:
            fraction = "<sup>5</sup>&frasl;<sub>16</sub>";
            break;
        case 6:
            fraction = "<sup>6</sup>&frasl;<sub>16</sub>";
            break;
        case 7:
            fraction = "<sup>7</sup>&frasl;<sub>16</sub>";
            break;
        case 8:
            fraction = "<sup>8</sup>&frasl;<sub>16</sub>";
            break;
        case 9:
            fraction = "<sup>9</sup>&frasl;<sub>16</sub>";
            break;
        case 10:
            fraction = "<sup>10</sup>&frasl;<sub>16</sub>";
            break;
        case 11:
            fraction = "<sup>11</sup>&frasl;<sub>16</sub>";
            break;
        case 12:
            fraction = "<sup>12</sup>&frasl;<sub>16</sub>";
            break;
        case 13:
            fraction = "<sup>13</sup>&frasl;<sub>16</sub>";
            break;
        case 14:
            fraction = "<sup>14</sup>&frasl;<sub>16</sub>";
            break;
        case 15:
            fraction = "<sup>15</sup>&frasl;<sub>16</sub>";
            break;
        default:
            //alert(number);
            fraction = number;
    }
    return fraction;
}


function convert_to_sixteenths(number) {
    number = parseFloat(number);
    let one_sixteenth = 0.0625;
    let whole_number = Math.floor(number);
    let decimal = number - Math.floor(number);
    let sixteenths = Math.round(decimal * 16);

    if( sixteenths == 0 ){
        return whole_number + "\"";
    }

    if (decimal === 0 || decimal === "0") {
        return whole_number;
    } else {
        //decimal = decimal.substring(whole_number.length + 1);
    }
    if( sixteenths == 16){
        return (whole_number+1) + "\""
    }
    return whole_number + " " + get_fraction(sixteenths) + "\"";
}


function square_it(number) {
    return Math.pow(number,2);
}
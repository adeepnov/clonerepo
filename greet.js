exports.greet = function()
{
    var d = new Date();
    if( d.getHours() >= 3 && d.getHours()<=12)
    {
        return "Good morning";
    }
    else if( d.getHours()>12 && d.getHours()<=18)
    {
        return "Good Afternoon";
    }
    else
    {
       return "Good Evening";
    }

}


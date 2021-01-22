// convert kilometer to meter.
function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter = kilometer*1000;
        return meter;
    }
    else{
        return "Distance can't be negative";
    }
}

//calculate the budget.
function budgetCalculator(watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0)
    {
        return "Amount of something can't be negative";
    }
    else
    {
        var totalBudget = (watch*50) + (phone*100) + (laptop*500);
        return totalBudget;
    }
}

// calculate the hotel cost
function hotelCost(days){
    var cost;
    if(days <= 10)
    {
        cost = days*100;
    }
    else if(days >= 11 && days <= 20)
    {
        days=days-10;
        cost = (10*100)+(days*80);
    }
    else if(days > 20)
    {
        days=days-20;
        cost = (10*100)+(10*80)+(days*50);
    }
    return cost;
}

// find the largest string in a array
function megaFriend(array){
    if(array.length == 0){
        return "error";
    }
     var max = array[0].length;
    for(var i=0;i<array.length;i++){
        if((typeof(array[i]) == 'number'))
        {
            return "error";
            break;
        }
        else if(array[i].length > max)
        {
            max = array[i];
            var position = array.indexOf(max);
            return array[position];
        }
    }   
}
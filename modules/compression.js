module.exports.comp = function comp(str)
{
    
    let freqs={};
    for(let i in str)
    {
        if(freqs[str[i]]==undefined)
        {
            freqs[str[i]]=1;
        }
        else
        {
            freqs[str[i]]=freqs[str[i]]+1;
        }
    }
    return freqs;
}
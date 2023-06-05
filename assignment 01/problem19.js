
	//Lucas series.....
    
    let i
    let f=2
    let s=1
    let t
    let sum=0

	sum=f+s;
	for(i=1;i<=8;i++)
	{
	 t=f+s;
	 sum+=t;
	 f=s;
	 s=t;
	}
	console.log("Sum=" + (sum));		
	
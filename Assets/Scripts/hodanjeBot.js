#pragma strict
var metak :	GameObject;
var metakSpawn : Transform; 
var brzinaHodanja : float = 10.0;
var score : score;
var brojac : brojac;
var smjer : Transform;
var naprijed : Transform;
private var hitInfo : RaycastHit;
var delay : float; 
var checkTime: float;

function Start ()
{
	score = GameObject.Find("score").GetComponent("score");
	var metakScript : metak = metak.GetComponent("metak");
	metakScript.vlasnik = gameObject;
}

function FixedUpdate ()

{
	transform.eulerAngles.x = 0;
	transform.eulerAngles.z = 0;
	transform.position.y = 0;
}


function Update () 
{
	
	animation["hodanje"].speed = brzinaHodanja/8;
	if (Physics.Raycast(naprijed.position, naprijed.forward, 3))
		if (!(Physics.Raycast(smjer.position,-smjer.right, 7)) && (Random.Range(0,50)) > 30)
				transform.eulerAngles.y = -90;
	else if (!(Physics.Raycast(smjer.position, smjer.forward, 7)) && (Random.Range(0,30)) < 20)
				transform.eulerAngles.y = 0;
	else if (!(Physics.Raycast(smjer.position,smjer.right, 7)) && (Random.Range(0,50)) > 30)
				transform.eulerAngles.y = 90;
	else if (!(Physics.Raycast(smjer.position,-smjer.forward, 7)) && (Random.Range(0,30)) < 20)
				transform.eulerAngles.y = 180;
	
	if (Time.time > checkTime)
	{
		if (!(Physics.Raycast(smjer.position, -smjer.right, 15)) && (Random.Range(0,100)) == 26)
			transform.eulerAngles.y = -90;
		if (!(Physics.Raycast(smjer.position, smjer.right, 15)) && (Random.Range(0,100)) == 26)
			transform.eulerAngles.y = 90;
		if (!(Physics.Raycast(smjer.position, smjer.forward, 15)) && (Random.Range(0,100)) == 26)
			transform.eulerAngles.y = 0;
		if (!(Physics.Raycast(smjer.position, -smjer.forward, 15)) && (Random.Range(0,100)) == 26)
			transform.eulerAngles.y = 180;
		checkTime = Time.time + 0.02;
	}
		
	animation.CrossFade("hodanje");
	transform.Translate(0,0,brzinaHodanja*Time.deltaTime);
	
	if (Physics.Raycast(smjer.position, -smjer.right, hitInfo))
		{
			if (hitInfo.collider.name == "cica_gliso1" && Time.time > delay)
				{
					transform.eulerAngles.y = -90;
					Instantiate(metak,metakSpawn.position,metakSpawn.rotation);
					audio.Play();
					delay = Time.time + 0.2;					
				}						
		}
	if (Physics.Raycast(smjer.position, smjer.right, hitInfo))
		{
			if (hitInfo.collider.name == "cica_gliso1" && Time.time > delay)
				{
					transform.eulerAngles.y = 90;
					Instantiate(metak,metakSpawn.position,metakSpawn.rotation);
					audio.Play();
					delay = Time.time + 0.2;	
				}						
		}
	if (Physics.Raycast(smjer.position, smjer.forward, hitInfo))
		{
			if (hitInfo.collider.name == "cica_gliso1" && Time.time > delay)
				{
					transform.eulerAngles.y = 0;
					Instantiate(metak,metakSpawn.position,metakSpawn.rotation);
					audio.Play();
					delay = Time.time + 0.2;	
				}						
		}
	if (Physics.Raycast(smjer.position, - smjer.forward, hitInfo))
		{
			if (hitInfo.collider.name == "cica_gliso1" && Time.time > delay)
				{
					transform.eulerAngles.y = 180;
					Instantiate(metak,metakSpawn.position,metakSpawn.rotation);
					audio.Play();
					delay = Time.time + 0.2;	
				}						
		}	
}

function OnCollisionEnter(collision : Collision)
{	
	if (collision.gameObject.name == 'metak1(Clone)') 
		{	
			Destroy(smjer);
			score.igrac1Kills ++ ;
			brojac.Death();
			Destroy(gameObject);
		}
	if (collision.gameObject.name == 'patike(Clone)')
		{
			brzinaHodanja = 20;
		 	Destroy(collision.gameObject);
		 	yield WaitForSeconds(5);
		 	brzinaHodanja = 10;
		}
}

	

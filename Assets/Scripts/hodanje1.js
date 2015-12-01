#pragma strict
var metak :	GameObject;
var metakSpawn : Transform; 
var brzinaHodanja : float = 10.0;
var score : score;
var brojac : brojac;

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
	
	if (Input.GetKey("w"))
		{
			animation.CrossFade("hodanje");
			transform.eulerAngles.y = 0;
			transform.Translate(0,0,brzinaHodanja*Time.deltaTime);
		}
	else if (Input.GetKey("s"))
		{
			animation.CrossFade("hodanje");
			transform.eulerAngles.y = 180;
			transform.Translate(0,0,brzinaHodanja*Time.deltaTime);
		}
	else if (Input.GetKey("a"))
		{
			animation.CrossFade("hodanje");
			transform.eulerAngles.y = -90;
			transform.Translate(0,0,brzinaHodanja*Time.deltaTime);
		}
	else if (Input.GetKey("d"))
		{
			animation.CrossFade("hodanje");
			transform.eulerAngles.y = 90;
			transform.Translate(0,0,brzinaHodanja*Time.deltaTime);
		}	
	else	animation.CrossFade("stajanje",0.1);
	if (Input.GetKeyDown("left ctrl"))
		{
			Instantiate(metak, metakSpawn.position, metakSpawn.rotation);
			audio.Play();
		}	
}

function OnCollisionEnter(collision : Collision)
{	
	if (collision.gameObject.name == 'metak2(Clone)') 
		{	
			score.igrac2Kills ++ ;
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

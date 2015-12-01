#pragma strict
var bulletSpeed = 5;
var vlasnik : GameObject;

function Update () 
{
	transform.Translate(0,0,bulletSpeed*Time.deltaTime);
	Destroy(gameObject, 5);
	
}
function OnCollisionEnter(collision : Collision)
{	
	if (collision.gameObject != vlasnik)
		Destroy(gameObject);
}
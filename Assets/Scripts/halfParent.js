#pragma strict

var parent : Transform;

function Update ()
{
	transform.position.x = parent.position.x;
	transform.position.z = parent.position.z;
	transform.position.y = parent.position.y +2;
}
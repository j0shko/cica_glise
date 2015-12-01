#pragma strict
var score : score;

function Start () 
{
	guiTexture.pixelInset.x = -Screen.width/10;
	guiTexture.pixelInset.y = -3*Screen.height/20;
	guiTexture.pixelInset.width = 2*Screen.width/10;
	guiTexture.pixelInset.height = 2*Screen.height/20;
}

function OnMouseOver ()
{
	guiTexture.pixelInset.x = -Screen.width/10 -10;
	guiTexture.pixelInset.y = -3*Screen.height/20 -10;
	guiTexture.pixelInset.width = 2*Screen.width/10 +20;
	guiTexture.pixelInset.height = 2*Screen.height/20 +20;
}

function OnMouseExit ()
{
	guiTexture.pixelInset.x = -Screen.width/10;
	guiTexture.pixelInset.y = -3*Screen.height/20;
	guiTexture.pixelInset.width = 2*Screen.width/10;
	guiTexture.pixelInset.height = 2*Screen.height/20;
}

function OnMouseDown ()
{
	score.playerCount = 1;
	Application.LoadLevel(1);
}
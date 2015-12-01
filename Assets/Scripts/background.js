#pragma strict

function OnGUI ()
{
	guiTexture.pixelInset.x = -Screen.width/2;
	guiTexture.pixelInset.y = -Screen.height/2;
	guiTexture.pixelInset.height = Screen.height;
	guiTexture.pixelInset.width = Screen.width;
}
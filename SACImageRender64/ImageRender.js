{
	"name": "ImageRenderer",
	"description": "Renders base64 strings",
	"newInstancePrefix": "CustomImageRenderer",
	"eula": "",
	"vendor": "LinaZ",
	"license": "",
	"id": "zImageRenderer",
	"version": "1.0.1",
	"icon": "",
	"webcomponents": [
		{
			"kind": "main",
			"tag": "custom-button",
			"url": "https://dev.azure.com/Harrods/Data%20Analytics/_apis/sourceProviders/TfsGit/filecontents?repository=Data%20Analytics&commitOrBranch=master&api-version=5.0-preview.1&path=/SACCustomWidgets/ImageRender/ImageRender.js",
			"integrity": ""	,
			"ignoreIntegrity": true
			
		}		
	],
	"properties": {
		"width": {
			"type": "integer",
			"default": 192
		},
		"height": {
			"type": "integer",
			"default": 32
		}
	},
	"methods": {
		"setValue": {
			"description": "Sets the image url",
			"parameters": [
				{
					"name": "newImgUrl",
					"type": "string",
					"description": "ImgUrl"
				}
			]
		}
	},
	"events": {
		"onClick": {
			"description": "Called when the user clicks the button."
		}
	}
}

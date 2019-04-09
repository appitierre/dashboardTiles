module.exports = {
    "displayTitle": {
        "type": "Text",
        "label": "Display Name",
        "help": "",
        "conditions": ["required"]
    },
    "_tiles": {
        "type": "Array",
        "label": "Tiles",
        "itemType": "Object",
        "addButtonText": "Add New Tile",
        "deleteButtonText": "Delete Tile",
        "itemTextAttribute": "name",
        "defaultPrefix": "Tile",
        "subSchema": {
            "title": {
                "type": "Text",
                "label": "Title"
            },
            "displayTitle": {
                "type": "Text",
                "label": "Display Title"
            },
            "description": {
                "type": "Text",
                "label": "Description"
            },
            "_poster": {
                "type": "AssetUpload:Image:Large",
                "label": "Poster Image"
            },            
            "_tileLinkType": {
                "type": "Select",
                "label": "Tile Link Type",
                "options": [{
                    "value": "course",
                    "text": "Course Link"
                }, {
                    "value": "resource",
                    "text": "Resource"
                }, {
                    "value": "externalLink",
                    "text": "External Link"
                }]
            },
            "_tileCourseLink": {
                "type": "CourseSelection",
                "label": "Course Link",
                "shouldOnlyAllowOneCourse": true
            },
            "_tileResourceUpload": {
                "type": "AssetUpload:Resource",
                "label": "Resource Upload"
            },
            "_courseExternalLink": {
                "type": "Text",
                "label": "External Link"
            },
            "_shouldOpenNewWindow": {
                "type": "Boolean",
                "label": "Open Link in New Window?"
            },
            "_isPublished": {
                "type": "Boolean",
                "label": "Is Published?"
            }
        }
    }
}
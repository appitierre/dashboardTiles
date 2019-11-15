module.exports = {
    "_items": {
        "type": "Array",
        "label": "Items",
        "itemType": "Object",
        "addButtonText": "Add New Item",
        "deleteButtonText": "Delete Item",
        "itemTextAttribute": "name",
        "defaultPrefix": "Item",
        "subSchema": {
            "displayTitle": {
                "type": "Text",
                "label": "Display Title"
            },
            "description": {
                "type": "Text",
                "label": "Description"
            },
            "_groups": {
                "type": "GroupSelection",
                "label": "Groups",
                "help": "Select the groups that should be able to view this section of dashboard tiles",
                "shouldAllowSelectAll": true
            },
            "tilesPerRow": {
                "type": "Select",
                "label": "Tiles per row",
                "help": "This will change the number of tiles that will display per row in an item",
                "options": [{
                    "value": 1,
                    "text": 1
                },
                {
                    "value": 2,
                    "text": 2
                    },
                {
                    "value": 3,
                    "text": 3
                }]
            },
            "shouldTilesStretchAcrossRows": {
                "type": "ToggleButtonField",
                "options": [{
                    "text": "Yes",
                    "value": true
                }, {
                    "text": "No",
                    "value": false
                }],
                "label": "Should tiles stretch across whole row?",
                "help": "For example, if you have choosen 3 tiles per row and have 2 tiles, selecting true here will stretch the 2 tiles across the row"
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
                        "type": "AssetUpload:Image:Small",
                        "label": "Poster Image"
                    },
                    "_linkType": {
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
                    "_courseLink": {
                        "type": "CourseSelection",
                        "label": "Course Link",
                        "shouldOnlyAllowOneCourse": true
                    },
                    "_resourceUpload": {
                        "type": "AssetUpload:Resource",
                        "label": "Resource Upload"
                    },
                    "_link": {
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
    }
}
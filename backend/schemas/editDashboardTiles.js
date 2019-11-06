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
                        "help": "Select a link type and then use the corresponding field below to complete the tile",
                        "options": [{
                            "value": "course",
                            "text": "Course"
                        }, {
                            "value": "resource",
                            "text": "Resource"
                        }, {
                            "value": "link",
                            "text": "Custom"
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
                        "label": "Custom Link",
                        "help": "This can be an external link such as http://google.com/ or an internal link like /#/library/trail/trail-name"
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
VARIABLES
```javascript
["Set", "x", 123]
["Get", "x"]
```

DEFINE FUNCTION
```javascript
[
    ["Set", "main",
        ["Function", ["name"],
            ["Print",
                ["+",
                    "Hello ", ["Get", "name"]
                ]
            ]
        ]
    ],
    "World"
]
```
FOR LOOP
```javascript
["For", "i", 0, 10, 2,
    ["Get", "i"]
]
```
WHILE LOOP
```javascript
["Set", "i", 0],
["While", ["<", ["Get", "i"], 3],
    ["++", "i"]
]
```
IF THEN ELSE
```javascript
["If", true, 1, 2]
```
OPERATORS
```javascript
["+", 1, 2]
["-", 1, 2]
["/", 1, 2]
["*", 1, 2]
["++", "VariableName"],
["--", "VariableName"]
```
SAMPLE PROGRAM
```javascript
["Print",
    ["+",
        ["*", 2, 3],
        ["Sin",
            ["/", 3.14, 2]
        ]
    ]
]
```

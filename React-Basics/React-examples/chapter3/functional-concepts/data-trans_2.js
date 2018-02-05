const colors = ["red","blue","red","green","green"]
const distinctColors = colors.reduce((distinct, colors) =>(distinct.indexOf(colors) != -1) ? distinct : [...distinct,color],
[]
)
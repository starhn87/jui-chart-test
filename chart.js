
$(function () {
    graph.ready(["chart.builder"], function (builder) {
        var data = [
            { kind: "구인", salary: [250, 350] },
            { kind: "재직", salary: [300, 400] },
            { kind: "구직", salary: [350, 450] }
        ];

        var dataSource2 = [
            { mr: "구인", value1: 300, value2: 330 },
            { mr: "재직", value1: 330, value2: 370 },
            { mr: "구직", value1: 410, value2: 390 }
        ];

        var obj = builder("#result", {
            width: 600,
            height: 600,
            theme: "classic",
            axis: [{
                x: {
                    type: "range",
                    domain: [200, 500],
                    step: 10,
                    line: true
                },
                y: {
                    type: "block",
                    domain: "kind",
                    line: true
                },
                data: data
            }, {
                y: {
                    domain: "mr",
                    color: "green",
                    orient: "top"
                },
                x: {
                    type: "range",
                    domain: [200, 500],
                    step: 10,
                    color: "green",
                    orient: "right",
                },
                data: dataSource2
            }],
            brush: [{
                type: "rangebar",
                target: ["salary"],
                outerPadding: 20
            }, {
                type: "scatter",
                target: ["value1", "value2"],
                axis: 1,
                colors: ["green", "gray"]
            }],
            widget: [
                { type: "title", text: "Bar Sample" },
                { type: "tooltip", orient: "right" },
                { type: "legend" },
                {
                    type: "tooltip",
                    format: function (data, k) {
                        return {
                            key: k,
                            value: data[k]
                        };
                    },
                    brush: [0, 2]
                }
            ]
        })
    })
})
/**
 * Created by igorpugachev on 15.04.16.
 */

app.controller('QuizPreviewController', ['$scope', '$http', '$stateParams', 'ENDPOINT_URI',
    function ($scope, $http, $stateParams, ENDPOINT_URI) {
        var showQuestions = function () {
            var id = $stateParams.quiz_id;

            $http.get(ENDPOINT_URI + 'quizes/previewQuiz/' + id).then(function (response) {
               $scope.practice = response.data;
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                MathJax.Hub.Queue(function () {
                    $('#practice').css('opacity', 1);
                });
            });
        };

        showQuestions()

    }
]);
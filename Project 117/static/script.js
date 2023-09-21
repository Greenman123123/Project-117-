var date = new Date().toLocaleDateString()
var displayText = "Date:"+date

$(document).ready (function(){
    $("#display_date").html(displayText)
})

var predicted_emotion

$(function(){
    $("#predicted_button").click(function(){
        var inputData = {
            "text":$("#text").val()
        }
        $.ajax({
            type: 'POST',
            url: "/predict",
            data: JSON.stringify(inputData),
            dataType: "json",
            contentType: 'application/json',
            success: function (result) {
                
                // Result Received From Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Display Result Using JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
        });
    })
})
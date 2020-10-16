<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<script>
var boardNo = '${detail.idBoard}';

$('[name=commentInsertButton]').click(function(){ //댓글 등록 버튼 클릭시
    var insertData = $('[name=commentInsertForm]').serialize(); //commentInsertForm의 내용을 가져옴
    commentInsert(insertData); //Insert 함수호출(아래)
});

function commentList() {
    $.ajax({
        url: '/comment/list',
        type: 'get',
        data: {'boardNo': boardNo},
        success: function(data) {
            var a = "";
            $.each(data, function(key, value) {
                a += '<div class="commentArea" style="border-bottom:1px solid darkgray; margin-bottom: 15px;">';
                                a += '<div class="commentInfo'+value.commentNo+'">'+'댓글번호 : '+value.commentNo+' / 작성자 : '+value.writer;
                                a += '<a onclick="commentUpdate('+value.commentNo+',\''+value.content+'\');"> 수정 </a>';
                                a += '<a onclick="commentDelete('+value.commentNo+');"> 삭제 </a> </div>';
                                a += '<div class="commentContent'+value.commentNo+'"> <p> 내용 : '+value.content +'</p>';
                                a += '</div></div>';
            });
            $(".commentList").html(a);

        }

    });


}

function commentInsert(insertData) {
    console.log(insertData);
    $.ajax({
        url: '/comment/insert',
        type: 'POST',
        data: insertData,
        success: function(data) {
            if(data == 1) {
                commentList();
                $('[name=content]').val("");
            }
        }
    });
}


$(document).ready(function() {
    commentList();
});

</script>
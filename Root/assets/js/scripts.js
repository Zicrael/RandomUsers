$( document ).ready (function () {
    $(".adding_button").click ( function () {
        adding_new_user();
    });
    
    
    $(".icon_search").click ( function () {
    
    });
    
    $allUsers = 0;
    
    function adding_new_user(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            $randomUser = data.results[0];
            $name = $randomUser.name;
            $picture = $randomUser.picture;
            $login = $randomUser.login;
            $location = $randomUser.location;
            $singleUser = [];
            
            $user_wrapper = $("<div class='row user_wrapper animated slideInLeft'>");
            $user_wrapper.attr("id", $name.first);
            $user_wrapper.appendTo($("#users_container"));

            $picture_wrapper= $("<div class='col-lg-1'>");
            $picture_wrapper.appendTo($user_wrapper);
            
            $getPicture = $("<img class='img-thumbnail img-fluid user_image_small'>");
            $getPicture.attr("src", $picture.medium);
            $getPicture.appendTo($picture_wrapper);

            $lastName = $("<div class='col-lg-2 last_name'>");
            $lastName.html($name.last);
            $lastName.appendTo($user_wrapper);
            $singleUser.push($name.last);
            
            $firstName = $("<div class='col-lg-2 first_name'>");
            $firstName.html($name.first);
            $firstName.appendTo($user_wrapper);
            $singleUser.push($name.first);

            $userName = $("<div class='col-lg-2 user_name'>");
            $userName.html($login.username);
            $userName.appendTo($user_wrapper);
            $singleUser.push($login.username);

            $phone = $("<div class='col-lg-2 phone'>");
            $phone.html($randomUser.phone);
            $phone.appendTo($user_wrapper);
            $singleUser.push($randomUser.phone);
            
            $state = $("<div class='col-lg-2 city'>");
            $state.html($location.state);
            $state.appendTo($user_wrapper);
            $singleUser.push($location.state);
            
            $iconWrapper = $("<div class='col-lg-1 more_info_button closed'>");
            $iconWrapper.appendTo($user_wrapper);
            $MoreInfo = $("<i class='fa fa-plus more_info_icon'>");
            $MoreInfo.appendTo($iconWrapper);

            $user_wrapper_additional = $("<div class='user_wrapper_additional container pb-4'>");
            $user_wrapper_additional.appendTo($user_wrapper);

            $MoreInfoTitle = $("<div class='col-lg-12 pt-3 more_info_title'>");
            $MoreInfoTitle.html($name.first);
            $MoreInfoTitle.appendTo($user_wrapper_additional);

            $iconGender = $("<i class='fa fa-female pl-2'>");
            if($randomUser.gender == "female"){
                $iconGender.appendTo($MoreInfoTitle);
            }
                else{
                    $iconGender.removeClass("fa-female");
                    $iconGender.addClass("fa-male");
                    $iconGender.appendTo($MoreInfoTitle);
                }

            $MoreInfoWrapperInside = $("<div class='row'>");
            $MoreInfoWrapperInside.appendTo($user_wrapper_additional);

            $containFurstColumn = $("<div class='col-lg-3 pt-2'>");
            $containFurstColumn.appendTo($MoreInfoWrapperInside);

            $containSecondColumn = $("<div class='col-lg-3 pt-2'>");
            $containSecondColumn.appendTo($MoreInfoWrapperInside);

            $containThridColumn = $("<div class='col-lg-3 pt-2'>");
            $containThridColumn.appendTo($MoreInfoWrapperInside);

            $containLastColumn = $("<div class='col-lg-3 pt-2'>");
            $containLastColumn.appendTo($MoreInfoWrapperInside);

            $UserNameInside = $("<div class='col-lg-12 pb-2'>");
            $UserNameInside.html("<strong>Username</strong>" + " " + $login.username);
            $UserNameInside.appendTo($containFurstColumn);

            $registerDate = $("<div class='col-lg-12 pb-2'>");
            $registerDate.html("<strong>Register</strong>" + " " + $randomUser.registered);
            $registerDate.appendTo($containFurstColumn);
            
            $email = $("<div class='col-lg-12 pb-2'>");
            $email.html("<strong>Email</strong>" + $randomUser.email);
            $email.appendTo($containFurstColumn);
            
            $address = $("<div class='col-lg-12 pb-2'>");
            $address.html("<strong>Address</strong>" + " " + $location.street);
            $address.appendTo($containSecondColumn);
            
            $city = $("<div class='col-lg-12 pb-2'>");
            $city.html("<strong>City</strong>" + " " + $location.sity);
            $city.appendTo($containSecondColumn);
            
            $zip = $("<div class='col-lg-12 pb-2'>");
            $zip.html("<strong>Zip Code</strong>" + " " + $location.postcode);
            $zip.appendTo($containSecondColumn);
            
            $birthday = $("<div class='col-lg-12 pb-2'>");
            $birthday.html("<strong>Birthday</strong>" + " " + $randomUser.dob);
            $birthday.appendTo($containThridColumn);
            
            $phoneNumber = $("<div class='col-lg-12 pb-2'>");
            $phoneNumber.html("<strong>Phone</strong>" + " " + $randomUser.phone);
            $phoneNumber.appendTo($containThridColumn);
            
            $Cell = $("<div class='col-lg-12 pb-2'>");
            $Cell.html("<strong>Cell</strong>" + " " + $randomUser.cell);
            $Cell.appendTo($containThridColumn);
            
            $imageBig = $("<img class='img-thumbnail img-fluid user_image_big'>");
            $imageBig.attr("src", $picture.large);
            $imageBig.appendTo($containLastColumn);

                $(".more_info_button:last").click(function(){
                    if($(this).hasClass("closed")){
                    $(this).parent().parent().find($(".user_wrapper_additional")).slideUp();
                    $(this).parent().parent().find($(".more_info_button")).removeClass("active");
                    $(this).parent().parent().find($(".more_info_button")).addClass("closed");
                    $(this).parent().parent().find($(".more_info_icon")).removeClass("fa-minus");
                    $(this).parent().parent().find($(".more_info_icon")).addClass("fa-plus");
                    $(this).next('.user_wrapper_additional').slideDown();
                    $(this).children("i").toggleClass("fa-minus fa-plus");
                    $(this).toggleClass("active closed");
                    
                    }
                        else if($(this).hasClass("active")){
                            $(this).next('.user_wrapper_additional').slideUp();
                            $(this).toggleClass("closed active");
                            $(this).children("i").toggleClass("fa-plus fa-minus ");
                        }
                });
            }
        });
    };
});

var data = new FormData(form);

data.append("error_return_url", "/index.php?module=admin&act=dispMemberAdminInsert");
data.append("ruleset","insertAdminMember");
data.append("module","member");
data.append("act","procMemberAdminInsert");
data.append("success_return_url","/index.php?module=admin&act=dispMemberAdminList");
data.append("user_id","vbnm123");
data.append("password","vbnm123");
data.append("email_address","vbnm@vbnm.vbnm");
data.append("user_name","vbnm");
data.append("nick_name","vbnm");
data.append("allow_mailing","N");
data.append("allow_message","Y");
data.append("is_admin","Y");

$.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/",
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000
        });

<!doctype html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>{{ config('app.name') }}</title>
    <style>
        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; }
        body {
            background-color: #f6f6f6;
            font-family: "Segoe UI", sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; }
        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
        table td {
            font-family: "Segoe UI", sans-serif;
            font-size: 14px;
            vertical-align: top; }
        .body {
            background-color: #f6f6f6;
            width: 100%; }
        .container {
            display: block;
            Margin: 0 auto !important;
            max-width: 580px;
            padding: 10px;
            width: 580px; }
        .content {
            box-sizing: border-box;
            display: block;
            Margin: 0 auto;
            max-width: 580px;
            padding: 10px; }
        .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; }
        .wrapper {
            box-sizing: border-box;
            padding: 20px; }
        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
        }
        .footer {
            clear: both;
            Margin-top: 10px;
            text-align: center;
            width: 100%; }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center; }
        h1,
        h2,
        h3,
        h4 {
            color: #000000;
            font-family: "Segoe UI", sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0; }
        h1 {
            font-size: 20px; }
        p,
        ul,
        ol {
            font-family: "Segoe UI", sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            Margin-bottom: 15px; }
        p li,
        ul li,
        ol li {
            list-style-position: inside;
            margin-left: 5px; }
        a {
            color: #3498db;
            text-decoration: underline; }
        .btn {
            box-sizing: border-box;
            width: 100%; }
        .btn > tbody > tr > td {
            padding-bottom: 15px; }
        .btn table {
            width: auto; }
        .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center; }
        .btn a {
            color: #fff;
            background-color: #2f66b3;
            border-color: #2c60a9;
            height: 34px;
            font-weight: 400;
            line-height: 16px;
            border-radius: 3px;
            box-sizing: border-box;
            cursor: pointer;
            display: inline-block;
            margin: 0;
            padding: 8px 14px;
            text-decoration: none; }
        .btn-primary table td {
            background-color: #3498db; }
        .btn-primary a {
            background-color: #3498db;
            border-color: #3498db;
            color: #ffffff; }
        .last {
            margin-bottom: 0; }
        .first {
            margin-top: 0; }
        .align-center {
            text-align: center; }
        .align-right {
            text-align: right; }
        .align-left {
            text-align: left; }
        .clear {
            clear: both; }
        .mt0 {
            margin-top: 0; }
        .mb0 {
            margin-bottom: 0; }
        .mb30 {
            margin-bottom: 30; }
        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0; }
        hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            Margin: 20px 0; }
        @media only screen and (max-width: 620px) {
            table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important; }
            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
                font-size: 16px !important; }
            table[class=body] .wrapper,
            table[class=body] .article {
                padding: 10px !important; }
            table[class=body] .content {
                padding: 0 !important; }
            table[class=body] .container {
                padding: 0 !important;
                width: 100% !important; }
            table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important; }
            table[class=body] .btn table {
                width: 100% !important; }
            table[class=body] .btn a {
                width: 100% !important; }
            table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important; }}
        @media all {
            .ExternalClass {
                width: 100%; }
            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%; }
            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important; } }
    </style>
</head>
<body class="">
<table border="0" cellpadding="0" cellspacing="0" class="body">
    <tr>
        <td>&nbsp;</td>
        <td class="container">
            <div class="content">
                <div class="wrapper">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-block align-center">
                                <h2 class="mb0">{!! env('APP_CUSTOM_NAME') !!}</h2>
                                <small>{!! env('APP_CUSTOM_SLOGAN') !!}</small>
                            </td>
                        </tr>
                    </table>
                </div>
                <table class="main">
                    <tr>
                        <td class="wrapper">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        @yield('container')
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div class="footer">
                    <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-block">
                                Esta mensagem foi enviada por <a href="{{ config('app.url') }}">{{ config('app.name') }}</a>.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </td>
        <td>&nbsp;</td>
    </tr>
</table>
</body>
</html>
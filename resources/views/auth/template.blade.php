<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8"/>
    <title>{{ config('app.name') }}</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset($assets . '/images/logo/favicon.ico?') . $version }}"/>

    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext">
    <link rel="stylesheet" href="{{ asset($assets . '/css/base.css?') . $version }}" type="text/css"/>

    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/popper.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/bootstrap.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.pjax.js?') . $version }}"></script>
    <script type="text/javascript" src="{{ asset($assets  . '/js/jquery.validate.js?') . $version }}"></script>
</head>
<body style="background-color: #411641"  class="antialiased border-top-wide border-primary d-flex flex-column">
    <div class="flex-fill d-flex flex-column justify-content-center">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <h1 style="color: #fff; font-size: 48px; margin-top: 50px">Complete security on a single account</h1>
                    <img src="{{asset('assets/images/newlogo.jpeg')}}" alt="">
                </div>
                <div class="col-md-6">
                    @yield('content')
                </div>
            </div>

        </div>
    </div>
</body>
</html>

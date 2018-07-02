<?php
/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\helpers\Url;

include_once dirname(__FILE__) . '/../../../lib/Autoloader.php';
$urlloc = Url::base()."/../";
$adminURL = Url::base()."/../admin";
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <?= Html::csrfMetaTags() ?>
    <link rel="stylesheet" href="<?= $urlloc ?>css/bootstrap.min.css"/>
    <link rel="stylesheet" href="<?= $urlloc ?>css/admin.css"/>
    <title><?= Html::encode($this->title) ?></title>
    <script src="<?= $urlloc ?>js/jquery.js"></script>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="col-md-12 wrapper">
    <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" href="<?php echo $adminURL ?>">Адмiн панель</a>
            <ul class="nav navbar-nav">
                <li>
                    <a href="<?php echo $adminURL ?>/pages">Сторiнки</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Новини<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo $adminURL ?>/news">Перелiк новин</a></li>
                        <li><a href="<?php echo $adminURL ?>/news/add.php">Додати новину</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Фiльми<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="<?php echo $adminURL ?>/films">Перелiк фiльмiв</a></li>
                        <li><a href="<?php echo $adminURL ?>/films/add.php">Додати новий фiльм</a></li>
                    </ul>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/eventDetailList.php">Сеанси</a>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/gallery">Галерея</a>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/bar">Кафе</a>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/poll">Опитування</a>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/mailer">Розсилка</a>
                </li>
                <li>
                    <a href="<?php echo $adminURL ?>/banners">Банери</a>
                </li>
                <li>
                    <a href="<?php echo Url::base() ?>/index.php/paymentordersview">Замовлення</a>
                </li>
                <li>
                    <a href="<?php echo Url::base() ?>/index.php/userview">Користувачі</a>
                </li>
            </ul>
        </div>
    </nav>

<?= $content ?>


<?php $this->endBody() ?>
<script src="<?= $urlloc ?>js/bootstrap.min.js"></script>
<script src="<?= $urlloc ?>js/common.js"></script>
</body>
</html>
<?php $this->endPage() ?>
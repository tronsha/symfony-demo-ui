<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/test", condition="request.server.get('APP_ENV') in ['dev']")
 */
class Test extends Controller
{
    /**
     * @Route("/")
     */
    public function index()
    {
        return $this->render('vue.html.twig', [
        ]);
    }

}

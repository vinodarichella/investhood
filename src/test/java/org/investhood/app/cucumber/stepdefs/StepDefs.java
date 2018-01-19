package org.investhood.app.cucumber.stepdefs;

import org.investhood.app.InvesthoodApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = InvesthoodApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

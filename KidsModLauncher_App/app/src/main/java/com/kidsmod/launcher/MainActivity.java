package com.kidsmod.launcher;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(new android.widget.TextView(this));
        android.widget.TextView tv = (android.widget.TextView) findViewById(android.R.id.content);
        tv.setText("KidsMod Launcher Active");
    }
}

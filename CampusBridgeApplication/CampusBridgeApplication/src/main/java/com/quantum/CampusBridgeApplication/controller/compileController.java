package com.quantum.CampusBridgeApplication.controller;

import java.io.BufferedReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class compileController {

    @PostMapping("/compile")
    public String compileCode(@RequestBody Map<String, String> payload) throws IOException, InterruptedException {
        String code = payload.get("code");
        String language = payload.get("language");

        switch (language.toLowerCase()) {
            case "java":
                return compileJava(code);
            case "python":
                return compilePython(code);
            case "c":
                return compileC(code);
            case "cpp":
                return compileCpp(code);
            default:
                return "Unsupported language: " + language;
        }
    }

    private String compileJava(String code) throws IOException, InterruptedException {
        String filename = "Main.java";
        writeToFile(filename, code);

        Process compile = Runtime.getRuntime().exec("javac " + filename);
        compile.waitFor();

        if (compile.exitValue() != 0) {
            return readStream(compile.getErrorStream());
        }

        Process run = Runtime.getRuntime().exec("java Main");
        run.waitFor();
        return readStream(run.getInputStream()) + readStream(run.getErrorStream());
    }

    private String compilePython(String code) throws IOException, InterruptedException {
        String filename = "script.py";
        writeToFile(filename, code);

        Process run = Runtime.getRuntime().exec("python " + filename);
        run.waitFor();
        return readStream(run.getInputStream()) + readStream(run.getErrorStream());
    }

    private String compileC(String code) throws IOException, InterruptedException {
        String filename = "main.c";
        String output = "main_c";
        writeToFile(filename, code);

        Process compile = Runtime.getRuntime().exec("gcc " + filename + " -o " + output);
        compile.waitFor();

        if (compile.exitValue() != 0) {
            return readStream(compile.getErrorStream());
        }

        Process run = Runtime.getRuntime().exec("./" + output);
        run.waitFor();
        return readStream(run.getInputStream()) + readStream(run.getErrorStream());
    }

    private String compileCpp(String code) throws IOException, InterruptedException {
        String filename = "main.cpp";
        String output = "main_cpp";
        writeToFile(filename, code);

        Process compile = Runtime.getRuntime().exec("g++ " + filename + " -o " + output);
        compile.waitFor();

        if (compile.exitValue() != 0) {
            return readStream(compile.getErrorStream());
        }

        Process run = Runtime.getRuntime().exec("./" + output);
        run.waitFor();
        return readStream(run.getInputStream()) + readStream(run.getErrorStream());
    }

    private void writeToFile(String filename, String content) throws IOException {
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write(content);
        }
    }

    private String readStream(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        StringBuilder result = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            result.append(line).append("\n");
        }
        return result.toString();
    }
}

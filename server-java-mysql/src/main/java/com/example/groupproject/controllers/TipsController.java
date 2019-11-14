package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Tips;
import com.example.groupproject.models.TipsRepository;

@RestController
@RequestMapping("/tips")
public class TipsController {

  @Autowired
  TipsRepository tipsRepository;

  @GetMapping()
  public List<Tips> getTips() {
    return tipsRepository.findAll();
  }
  
  @PostMapping()
  public Tips addTips(@RequestBody Tips tip) {
     return tipsRepository.save(tip);
  }

  @DeleteMapping("/{id}")
  public void deleteTask(@PathVariable Long id) {
    tipsRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Tips updateTips(@PathVariable Long id, @RequestBody Tips tip) {
    Tips foundTips = tipsRepository.findById(id).orElse(null);
    if (foundTips != null) {
        foundTips.setUserName(tip.getUserName());
        foundTips.setTipsSubmission(tip.getTipsSubmission());
      tipsRepository.save(foundTips);
      return foundTips;
    }
    return null;
  }
}

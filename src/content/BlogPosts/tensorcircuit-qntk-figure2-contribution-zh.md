---
title: "TensorCircuit-NG：QNTK Figure 2 复现记录"
date: "2026-09-22"
locale: "zh"
tags: ["开源贡献", "TensorCircuit-NG", "QNTK"]
excerpt: "记录 TensorCircuit-NG 开源贡献的实现、审查修订、验证结果与已合并的两个 Pull Request。"
draft: false
---

这篇笔记记录我对 [TensorCircuit-NG](https://github.com/tensorcircuit/tensorcircuit-ng) 的开源贡献，方便从 Projects 页面回看实现细节。

## 贡献内容

[PR #131](https://github.com/tensorcircuit/tensorcircuit-ng/pull/131) 加入了论文 [*Towards Practical Quantum Neural Network Diagnostics with Neural Tangent Kernels*](https://arxiv.org/abs/2503.01966) Figure 2 的自包含复现实验。实验使用六量子比特横场 Ising 回归任务，覆盖四种量子神经网络架构、5–30 的电路深度和三组固定随机初始化，并比较低频与高频 HVA/HEA 电路的 QNTK 谱特征和条件性指标。

复现实验保留了论文中的主要定性结论：低频电路能够保持较高的测试集 $R^2$，而高频电路的测试集 $R^2$ 会随着深度增加而接近零。

## 审查修订

审查指出原实现存在观测量不匹配和 PyTorch 耦合过深的问题。提交 `272271f` 将代表性观测量改为 `expectation_ps(x=[0])`，使用 TensorCircuit backend API 处理张量转换、向量化和 JIT，并增加 `--backend jax|pytorch` 选项。

由于 TensorCircuit-NG 1.9.1 的 `jacrev` 路径与相关 functorch 变换不兼容，PyTorch 标量输出 Jacobian 使用等价的 backend gradient transform。不同后端保持相同精度、随机种子、深度、输入和编码尺度。

## 验证与状态

- PyTorch 路径的 72/72 个配置点全部完成。
- 四种架构均完成代表性的 JAX/PyTorch 一致性检查。
- 一致性检查中的最大输出差异和 Jacobian 差异低于 `5e-16`。
- Black、Pylint、Python 编译和 gallery 生成检查均通过。
- 没有修改 TensorCircuit-NG 核心源码文件。
- [PR #131](https://github.com/tensorcircuit/tensorcircuit-ng/pull/131) 已合并到 `tensorcircuit:master`。
- [PR #132](https://github.com/tensorcircuit/tensorcircuit-ng/pull/132) 已将 `ninjaduck7` 加入贡献者文档并合并。

上游复现命令：

```bash
python examples/reproduce_papers/2025_qntk_diagnostics/main.py
```

## 后续跟进

- 使用最新 TensorCircuit-NG 版本重新运行，并记录环境版本。
- 判断是否将单量子比特 $X_0$ 扩展为六个量子比特全部 $X$ 期望的归一化平均值。
- 补充 VQE 目标值数字化来源和重建选择的说明。
